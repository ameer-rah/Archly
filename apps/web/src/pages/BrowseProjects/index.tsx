import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmptyState from "./EmptyState";
import "./browseprojects.css";

/**
 * Browse Projects (`/browse-projects`, Figma frame `72:2`). An app/
 * utility page, not a marketing one — plain sand background, compact
 * header instead of a hero, sidebar filters + results area. No
 * gradient-fade section seams or grid texture here; those are a
 * marketing-page convention and this page doesn't have marketing
 * "sections" to blend between.
 */
export default function BrowseProjects() {
  return (
    <>
      <NavBar />
      <PageTransition>
        <main className="bp-page">
          <Header />
          <div className="bp-body">
            <Sidebar />
            <EmptyState />
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
