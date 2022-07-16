import { memo } from "react";
import { Template } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext";
import { getMsg } from "keycloakify";

export const LoginVerifyEmail = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginVerifyEmail } & KcProps) => {
    const { msg } = getMsg(kcContext);

    const { url, user } = kcContext;

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={true}
        displayMessage={false}
        headerNode={msg("emailVerifyTitle")}
        formNode={
          <>
            <p className="instruction">
              {msg("emailVerifyInstruction1", user?.email)}
            </p>
            <p className="instruction">
              {msg("emailVerifyInstruction2")}
              <br />
              <a href={url.loginAction}>{msg("doClickHere")}</a>
              &nbsp;
              {msg("emailVerifyInstruction3")}
            </p>
          </>
        }
      />
    );
  }
);
