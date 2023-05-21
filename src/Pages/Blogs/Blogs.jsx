import useTitle from "../../Hook/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div className="container mx-auto py-8 mt-16">
      <h3 className="text-3xl font-bold mb-4 text-center text-success">
        Blogs
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded shadow">
          <img
            src="https://i.ibb.co/8Ns62z1/istockphoto-182176558-612x612.jpg"
            alt="Blog"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h4>
            <p className="text-gray-700">
              An access token is a credential used to authenticate and authorize
              a user to access protected resources. It is typically short-lived
              and grants limited permissions. A refresh token is a credential
              used to obtain a new access token after the current one expires.
              It is usually long-lived and provides a way to maintain a users
              session without requiring them to reauthenticate. Access tokens
              should be stored securely on the client-side, such as in an
              HTTP-only cookie or in browser storage, while refresh tokens
              should be stored securely, such as in an HTTP-only cookie or
              server-side session storage.
            </p>
          </div>
        </div>
        <div className="bg-white rounded shadow">
          <img
            src="https://i.ibb.co/8Ns62z1/istockphoto-182176558-612x612.jpg"
            alt="Blog"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              Compare SQL and NoSQL databases?
            </h4>
            <p className="text-gray-700">
              SQL Databases: <br />
              1. Structured data with predefined schema. <br />
              2. ACID properties for data consistency. <br />
              3. Powerful querying language (SQL) for complex operations. <br />
              NoSQL Databases: <br />
              1. Flexible data models for unstructured or evolving data. <br />
              2. Scalability and high-performance for large volumes of data.{" "}
              <br />
              3. Emphasis on availability, fault tolerance, and horizontal
              scaling.
            </p>
          </div>
        </div>
        <div className="bg-white rounded shadow">
          <img
            src="https://i.ibb.co/8Ns62z1/istockphoto-182176558-612x612.jpg"
            alt="Blog"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              What is express js? What is Nest JS?
            </h4>
            <p className="text-gray-700">
              Express.js is a minimalist web application framework for Node.js.
              It is designed to build web applications and APIs with simplicity
              and flexibility in mind. Express.js provides a set of features and
              utilities that make it easier to handle HTTP requests, manage
              routes, handle middleware, and render views. <br />
              <br />
              Express.js allows developers to quickly set up server-side
              applications using JavaScript. It provides a straightforward
              approach to handling HTTP requests and responses, routing, and
              middleware integration. With Express.js, developers have the
              freedom to choose and configure additional libraries and tools as
              needed, making it highly customizable.
            </p>
          </div>
        </div>
        <div className="bg-white rounded shadow">
          <img
            src="https://i.ibb.co/8Ns62z1/istockphoto-182176558-612x612.jpg"
            alt="Blog"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              What is MongoDB aggregate and how does it work
            </h4>
            <p className="text-gray-700">
              The MongoDB aggregate function is used for data aggregation and
              analysis. It takes an array of stages as input, each representing
              a specific operation or transformation on the documents. The
              stages are executed sequentially, allowing you to filter, group,
              project, sort, limit, and perform other operations on the data. It
              is a powerful tool for extracting meaningful insights from MongoDB
              collections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
