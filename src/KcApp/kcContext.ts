import { getKcContext } from "keycloakify";

export const { kcContext } = getKcContext<{
  pageId: "register.ftl";
}>({
  /* Uncomment to test outside of keycloak, ⚠️ don't forget to run 'yarn keycloak' at least once */
  mockPageId: "register.ftl",
  /**
   * Customize the simulated kcContext that will let us
   * dev the page outside keycloak (with auto-reload)
   */
  mockData: [
    {
      pageId: "register.ftl",
      locale: {
        currentLanguageTag: "en",
      },
    },
  ],
});

export type KcContext = NonNullable<typeof kcContext>;
