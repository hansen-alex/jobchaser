import {
  useRouteError,
  ErrorResponse,
  isRouteErrorResponse,
  Link,
} from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main>
      <h1>Error</h1>
      {isRouteErrorResponse(error) && (
        <p>
          <i>
            {(error as ErrorResponse).status +
              " " +
              (error as ErrorResponse).statusText}
          </i>
        </p>
      )}
      <Link to={"/"}>Return</Link>
    </main>
  );
};
