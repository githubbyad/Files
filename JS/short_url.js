/* Define your short → long URL path */
const urlMappings_su = [
  { short: 'trump',   long: 'trump-judge-arrests-overreach-or-justice-p2629-316.htm' },
  { short: 'biden',   long: 'biden-random-details-here.htm' },
  { short: 'economy', long: 'us-economy-slowdown-q1-2025.htm' },
  /* Add as many as needed... */
];

const currentPath_su = window.location.pathname.replace(/^\/+/, '');
const match_su = urlMappings_su.find(mapping => 
  mapping.long === currentPath_su && !mapping.long.includes("index0.htm")
);
if (match_su) {
  window.history.pushState({}, '', '/' + match_su.short);
}
