import { SocialNetworksContext } from "../../contexts/SocialNetworksContext";

export default function SocialNetworks() {
  return (
    <section className="social-networks">
      <SocialNetworksContext.Consumer>
        {(context) =>
          context.networks.map((n) => (
            <a
              href={n.url}
              key={n.name}
              target="_blank"
              rel="noreferrer noopener"
            >
              {n.name}
            </a>
          ))
        }
      </SocialNetworksContext.Consumer>
    </section>
  );
}
