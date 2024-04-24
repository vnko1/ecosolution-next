const scrollTo = (id: string) =>
  document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default scrollTo;
