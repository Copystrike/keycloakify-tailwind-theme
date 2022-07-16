
# Keycloakify-tailwind

This project was normally intended for private use, but I decided to share it with the community.

This project is a fork from [Keycloakify-demo-app#look_and_feel](https://github.com/garronej/keycloakify-demo-app/tree/look_and_feel/src/KcApp) (aka component level customization demo) with all the default pages from [keycloakify/components](https://github.com/InseeFrLab/keycloakify/tree/main/src/lib/components) along with tailwind installed and configured.

The reason I went with the component level customization is so that I have more control over the looks and feel.


![Preview](https://i.imgur.com/g08Th8D.png)

(You can also just do `classname={"text-red-300"}` but this is just an example)

# Requirements

Linux environment, or you will not be able to run "yarn keycloak" (Which is essential)
If you do not have a linux machine I recommend you to checkout github codespace which works perfectly! (I use it, and I am not complaining about it)

# Issues

If you found any issue with this project, please open an issue!


# Faq

The project comes with tailwind installed and configured, but is not used. The design part is up to you. The current pages are still using the standard Keycloakify CSS styling.

# Recommendations

1. I would suggest when you edit a page you keep the use of the Template component.

1. When desinging a page you I highly recommend to checkout [docs.keycloakify.dev/developpement](https://docs.keycloakify.dev/developpement) for a better design expirience.

1. When designing for example login.tsx you should change `doFetchDefaultThemeResources={true}` in `<Template>` to false to avoid having the css of the default theme.

