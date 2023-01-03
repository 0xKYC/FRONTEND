const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/profile"],
    exact: true,
    component: "Profile",
  },
  {
    path: ["/privacy-policy"],
    exact: true,
    component: "PrivacyPolicy",
  },
  {
    path: ["/terms-of-service"],
    exact: true,
    component: "TermsOfService",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/documentation"],
    exact: true,
    component: "Documentation",
  },
];

export default routes;
