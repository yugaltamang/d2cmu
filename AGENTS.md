# Project architecture

- Keep the campus virtual tour in a dedicated landing component before FAQs; use provider-hosted iframe viewers and mount only the selected tour to avoid multiple WebGL contexts.