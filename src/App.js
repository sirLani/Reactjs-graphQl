import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from "./containers/pokemonContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
  });

  return (
    <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
      </ApolloHooksProvider>
</ApolloProvider>
  );
}

export default App;
