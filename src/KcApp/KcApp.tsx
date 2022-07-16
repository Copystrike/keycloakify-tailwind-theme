
import { defaultKcProps as props } from "keycloakify";
import { memo } from "react";
import { KcApp as KcAppBase } from "keycloakify/lib/components/KcApp";
import type { KcContext } from "./kcContext";
import "./kcMessagesExtension";
import { Register } from "./Register";
import { Info } from "keycloakify/lib/components/Info";
import { Error } from "keycloakify/lib/components/Error";
import { Terms } from "./Terms";
import { RegisterUserProfile } from "./RegisterUserProfile";
import { LoginResetPassword } from "./LoginResetPassword";
import { LoginVerifyEmail } from "./LoginVerifyEmail";
import { LoginOtp } from "./LoginOtp";
import { LoginUpdatePassword } from "./LoginUpdatePassword";
import { LoginUpdateProfile } from "./LoginUpdateProfile";
import { LoginIdpLinkConfirm } from "./LoginIdpLinkConfirm";
import { LoginPageExpired } from "./LoginPageExpired";
import { LoginIdpLinkEmail } from "./LoginIdpLinkEmail";
import { LoginConfigTotp } from "./LoginConfigTotp";
import { LogoutConfirm } from "./LogoutConfirm";
import { Login } from "./Login";


export const KcApp = memo(({ kcContext }: { kcContext: KcContext }) => {
  switch (kcContext.pageId) {
    case "login.ftl":
      return <Login {...{ kcContext, ...props }} />;
    case "register.ftl":
      return <Register {...{ kcContext, ...props }} />;
    case "register-user-profile.ftl":
      return <RegisterUserProfile {...{ kcContext, ...props }} />;
    case "info.ftl":
      return <Info {...{ kcContext, ...props }} />;
    case "error.ftl":
      return <Error {...{ kcContext, ...props }} />;
    case "login-reset-password.ftl":
      return <LoginResetPassword {...{ kcContext, ...props }} />;
    case "login-verify-email.ftl":
      return <LoginVerifyEmail {...{ kcContext, ...props }} />;
    case "terms.ftl":
      return <Terms {...{ kcContext, ...props }} />;
    case "login-otp.ftl":
      return <LoginOtp {...{ kcContext, ...props }} />;
    case "login-update-password.ftl":
      return <LoginUpdatePassword {...{ kcContext, ...props }} />;
    case "login-update-profile.ftl":
      return <LoginUpdateProfile {...{ kcContext, ...props }} />;
    case "login-idp-link-confirm.ftl":
      return <LoginIdpLinkConfirm {...{ kcContext, ...props }} />;
    case "login-idp-link-email.ftl":
      return <LoginIdpLinkEmail {...{ kcContext, ...props }} />;
    case "login-page-expired.ftl":
      return <LoginPageExpired {...{ kcContext, ...props }} />;
    case "login-config-totp.ftl":
      return <LoginConfigTotp {...{ kcContext, ...props }} />;
    case "logout-confirm.ftl":
      return <LogoutConfirm {...{ kcContext, ...props }} />;
    default:
      return <KcAppBase {...{ kcContext, ...props }} />;
  }
});
