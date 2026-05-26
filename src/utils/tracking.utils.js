/**
 * Track a Google Analytics event via gtag.
 *
 * @param {string} eventName - The event action (see events in use below)
 * @param {string} category  - Groups related events (see categories in use below)
 * @param {string} label     - Identifies the specific target clicked
 * @param {object} params    - Optional extra params to pass to gtag
 *
 * Events in use:
 *   "nav_click"      — user clicks a nav menu item          category: "navigation"   label: section id (e.g. "about")
 *   "social_click"   — user clicks a social icon            category: "about"        label: "linkedin" | "github" | "whatsapp"
 *   "contact_click"  — user clicks phone or email           category: "about"        label: "phone" | "email"
 *   "company_click"  — user clicks a company name link      category: "experience"   label: company name
 *   "view_award"     — user clicks eye icon on a cert       category: "awards"       label: cert slug (e.g. "mongodb-python")
 *   "view_project"   — user clicks eye icon on a project    category: "open_source"  label: project slug (e.g. "loremi-chrome")
 *
 * How to view in Google Analytics:
 *   1. Go to Reports
 *   2. Open Engagement → Events
 *   3. Look for the event name (e.g. "nav_click", "social_click")
 *   4. Click the event to see a breakdown by event_label (which item was clicked)
 *
 * @example
 * trackEvent("nav_click", "navigation", "about");
 * trackEvent("social_click", "about", "github");
 * trackEvent("contact_click", "about", "email");
 * trackEvent("company_click", "experience", "TwinHealth");
 * trackEvent("view_award", "awards", "mongodb-python");
 * trackEvent("view_project", "open_source", "loremi-firefox");
 */
export const trackEvent = (eventName, category, label, params = {}) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      event_category: category,
      event_label: label,
      ...params,
    });
  }
};
