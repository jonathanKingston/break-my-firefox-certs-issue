# break-my-firefox-certs-issue

This shows an issue in Firefox that breaks embeded cert pages.

# STR
- Clone or download extension
- Load extension in about:debugging
- Load [https://tantek.com](https://tantek.com)
- Click the url bar page action
- Page should open an extension page with an iframe

Notice that the cert error in this page doesn't load all it's inline scripts

Any page with a cert issue should replicate, change the URL of the page loaded.


# Error log

The error log I see is:

```
Content Security Policy: The page's settings blocked the loading of a resource at self ("script-src about://:32621"). Source: 
      // The following parameters are p....  neterror:28
Content Security Policy: The page's settings blocked the loading of a resource at self ("script-src about://:32621"). Source: onclick attribute on button element.  neterror
Content Security Policy: The page's settings blocked the loading of a resource at self ("script-src about://:32621"). Source: 
        // Only do autofocus if we're t....  neterror:609
Content Security Policy: The page's settings blocked the loading of a resource at self ("script-src about://:32621"). Source: 
      initPage();
    .  neterror:653
```
