/*
  Catch all possible routes and redirect the user to the root slug.
  Any predefined route takes precedence so this won't override them.
*/
import { getUrlFromSlug } from "../data/services/url";

export default function AnySlug() {
  return <></>;
}

export async function getStaticProps(context: { params: { slugs: string[] } }) {
  const slugs = context.params.slugs;
  const redirectToHome = {
    redirect: {
      permanent: true,
      destination: "/",
    },
  };

  if (slugs?.length !== 1) {
    return redirectToHome;
  }

  const slug = slugs[0] || "";
  return await getUrlFromSlug(slug)
    .then((url) => {
      if (url) {
        return {
          redirect: {
            permanent: true,
            destination: url,
          },
        };
      } else {
        return redirectToHome;
      }
    })
    .catch((error) => {
      console.error(error.message);
      return redirectToHome;
    });
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
