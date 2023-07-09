import Footer from "../components/footer";
import Nav from "../components/nav";
import Title from "../components/title";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-grow">
        <div className="mx-auto flex max-w-5xl flex-col items-start px-8">
          <Title>About me</Title>
          <div className="space-y-4 text-lg">
            <p>
              As you probably saw on the main page, my name is Hubert, but
              people on the Internet call me ivirtex.
            </p>
            <p>
              I am a software developer from Poland. I mostly work on mobile
              apps using SwiftUI and Flutter, but I am also interested in
              reverse engineering, 3D graphics and UI, UX design. I enjoy
              experimenting with new frameworks and libraries to see how they
              work and to determine their pros and cons (e.g. this website is
              built using Next.js).
            </p>
            <p>
              I love open-source software and I am always looking for new
              projects to contribute to. In fact, I am an actual contributor to
              the official Flutter repository, where I helped with fidelity
              issues in one of the core packages (Cupertino) and I also
              committed to the Flutter&apos;s platform testing tools. Besides
              Flutter I also contributed to many other, smaller open-source
              projects.
            </p>
            <p>
              Feel free to reach out to me on /contact and check out my GitHub
              profile to see what I am working on!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
