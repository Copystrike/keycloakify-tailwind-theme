import { useEffect, memo } from "react";
import { Template } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "keycloakify/lib/getKcContext";
import { getMsg } from"keycloakify";
import { headInsert } from "keycloakify/lib/tools/headInsert";
import { pathJoin } from "keycloakify/lib/tools/pathJoin";
import { useCssAndCx } from "tss-react";

export const LoginOtp = memo(({ kcContext, ...props }: { kcContext: KcContextBase.LoginOtp } & KcProps) => {
    const { otpLogin, url } = kcContext;

    const { cx } = useCssAndCx();

    const { msg, msgStr } = getMsg(kcContext);

    useEffect(() => {
        let isCleanedUp = false;

        headInsert({
            "type": "javascript",
            "src": pathJoin(kcContext.url.resourcesCommonPath, "node_modules/jquery/dist/jquery.min.js"),
        }).then(() => {
            if (isCleanedUp) return;

            evaluateInlineScript();
        });

        return () => {
            isCleanedUp = true;
        };
    }, []);

    return (
        <Template
            {...{ kcContext, ...props }}
            doFetchDefaultThemeResources={true}
            headerNode={msg("doLogIn")}
            formNode={
                <form id="kc-otp-login-form" className={cx(props.kcFormClass)} action={url.loginAction} method="post">
                    {otpLogin.userOtpCredentials.length > 1 && (
                        <div className={cx(props.kcFormGroupClass)}>
                            <div className={cx(props.kcInputWrapperClass)}>
                                {otpLogin.userOtpCredentials.map(otpCredential => (
                                    <div key={otpCredential.id} className={cx(props.kcSelectOTPListClass)}>
                                        <input type="hidden" value="${otpCredential.id}" />
                                        <div className={cx(props.kcSelectOTPListItemClass)}>
                                            <span className={cx(props.kcAuthenticatorOtpCircleClass)} />
                                            <h2 className={cx(props.kcSelectOTPItemHeadingClass)}>{otpCredential.userLabel}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={cx(props.kcFormGroupClass)}>
                        <div className={cx(props.kcLabelWrapperClass)}>
                            <label htmlFor="otp" className={cx(props.kcLabelClass)}>
                                {msg("loginOtpOneTime")}
                            </label>
                        </div>

                        <div className={cx(props.kcInputWrapperClass)}>
                            <input id="otp" name="otp" autoComplete="off" type="text" className={cx(props.kcInputClass)} autoFocus />
                        </div>
                    </div>

                    <div className={cx(props.kcFormGroupClass)}>
                        <div id="kc-form-options" className={cx(props.kcFormOptionsClass)}>
                            <div className={cx(props.kcFormOptionsWrapperClass)} />
                        </div>

                        <div id="kc-form-buttons" className={cx(props.kcFormButtonsClass)}>
                            <input
                                className={cx(props.kcButtonClass, props.kcButtonPrimaryClass, props.kcButtonBlockClass, props.kcButtonLargeClass)}
                                name="login"
                                id="kc-login"
                                type="submit"
                                value={msgStr("doLogIn")}
                            />
                        </div>
                    </div>
                </form>
            }
        />
    );
});

declare const $: any;

function evaluateInlineScript() {
    $(document).ready(function () {
        // Card Single Select
        $(".card-pf-view-single-select").click(function (this: any) {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).children().removeAttr("name");
            } else {
                $(".card-pf-view-single-select").removeClass("active");
                $(".card-pf-view-single-select").children().removeAttr("name");
                $(this).addClass("active");
                $(this).children().attr("name", "selectedCredentialId");
            }
        });

        var defaultCred = $(".card-pf-view-single-select")[0];
        if (defaultCred) {
            defaultCred.click();
        }
    });
}
