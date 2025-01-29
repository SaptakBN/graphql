import { useQuery } from "@apollo/client";
import "./home.css";
import { MeDocument } from "@/GraphQL/generated/graphql";

const Home = () => {
  const { data, error } = useQuery(MeDocument);
  console.log({ data, error });
  return (
    <main className="main">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-author--no-cover">
            <h3>Russ Beye</h3>
          </div>
        </div>

        <div className="blog-body">
          <div className="blog-title">
            <h1>
              <a href="#">This Post Has No Cover Image</a>
            </h1>
          </div>
          <div className="blog-summary">
            <p>
              Here is an example of a post without a cover image. You don't always have to have a cover image. In fact, leaving them out from time to
              time and disrupt the predictive flow and make the overall design more interesting. Something to think about.
            </p>
          </div>
        </div>

        <div className="blog-footer">
          <ul>
            <li className="published-date">12 days ago</li>
            <li className="comments">
              <a href="#">
                <span className="numero">8</span>
              </a>
            </li>
            <li className="shares">
              <a href="#">
                <span className="numero">3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
