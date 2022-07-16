import { memo } from "react";
import { Template } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext";
import { getMsg } from "keycloakify";
import { useCssAndCx } from "tss-react";

export const LoginIdpLinkConfirm = memo(({ kcContext, ...props }: { kcContext: KcContextBase.LoginIdpLinkConfirm } & KcProps) => {
    const { url, idpAlias } = kcContext;

    const { msg } = getMsg(kcContext);

    const { cx } = useCssAndCx();

    return (
        <Template
            {...{ kcContext, ...props }}
            doFetchDefaultThemeResources={true}
            headerNode={msg("confirmLinkIdpTitle")}
            formNode={
                <form id="kc-register-form" action={url.loginAction} method="post">
                    <div className={cx(props.kcFormGroupClass)}>
                        <button
                            type="submit"
                            className={cx(props.kcButtonClass, props.kcButtonDefaultClass, props.kcButtonBlockClass, props.kcButtonLargeClass)}
                            name="submitAction"
                            id="updateProfile"
                            value="updateProfile"
                        >
                            {msg("confirmLinkIdpReviewProfile")}
                        </button>
                        <button
                            type="submit"
                            className={cx(props.kcButtonClass, props.kcButtonDefaultClass, props.kcButtonBlockClass, props.kcButtonLargeClass)}
                            name="submitAction"
                            id="linkAccount"
                            value="linkAccount"
                        >
                            {msg("confirmLinkIdpContinue", idpAlias)}
                        </button>
                    </div>
                </form>
            }
        />
    );
});
