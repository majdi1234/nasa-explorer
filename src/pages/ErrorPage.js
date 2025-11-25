import React from 'react';
import { useRouteError, Link } from 'react-router-dom'; //  hook lil details erreur

function ErrorPage() {
  const error = useRouteError(); // ya5ou l'objet erreur
  console.error(error);

  return (
    <div className="container text-center py-5">
      <h1 className="display-1 text-danger">Oops!</h1>
      <p className="fs-3">Désolé, une erreur inattendue est survenue.</p>
      <p className="fs-5 text-muted">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-primary mt-4">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;