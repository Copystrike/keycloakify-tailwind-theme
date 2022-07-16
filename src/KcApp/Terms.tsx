import { useReducer, useEffect, memo } from "react";
import { Template } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext/KcContextBase";
import { getMsg } from "keycloakify";
import { useCssAndCx } from "tss-react";
import { kcMessages, getCurrentKcLanguageTag } from "keycloakify";
import type { KcLanguageTag } from "keycloakify";

/** Allow to avoid bundling the terms and download it on demand*/
export function useDownloadTerms(params: {
  kcContext: KcContextBase;
  downloadTermMarkdown: (params: {
    currentKcLanguageTag: KcLanguageTag;
  }) => Promise<string>;
}) {
  const { kcContext, downloadTermMarkdown } = params;

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const currentKcLanguageTag = getCurrentKcLanguageTag(kcContext);

    downloadTermMarkdown({ currentKcLanguageTag }).then((thermMarkdown) => {
      kcMessages[currentKcLanguageTag].termsText = thermMarkdown;
      forceUpdate();
    });
  }, []);
}

export const Terms = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Terms } & KcProps) => {
    const { msg, msgStr } = getMsg(kcContext);

    const { cx } = useCssAndCx();

    const { url } = kcContext;

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={true}
        displayMessage={false}
        headerNode={msg("termsTitle")}
        formNode={
          <>
            <div id="kc-terms-text">{msg("termsText")}</div>
            <form
              className="form-actions"
              action={url.loginAction}
              method="POST"
            >
              <input
                className={cx(
                  props.kcButtonClass,
                  props.kcButtonClass,
                  props.kcButtonClass,
                  props.kcButtonPrimaryClass,
                  props.kcButtonLargeClass
                )}
                name="accept"
                id="kc-accept"
                type="submit"
                value={msgStr("doAccept")}
              />
              <input
                className={cx(
                  props.kcButtonClass,
                  props.kcButtonDefaultClass,
                  props.kcButtonLargeClass
                )}
                name="cancel"
                id="kc-decline"
                type="submit"
                value={msgStr("doDecline")}
              />
            </form>
            <div className="clearfix" />
          </>
        }
      />
    );
  }
);
