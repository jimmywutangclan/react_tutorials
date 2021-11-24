import Layout from './Layout';
import { ThemeContextProvider } from './ThemeContext';
import Navbar from './Navbar';
import Article from './Article';

function ContextApp() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Layout>
          <Article title="Squirrel boy found" content="Hello world" />
        </Layout>
        <Navbar />
      </ThemeContextProvider>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </div>
  );
}

export default ContextApp;
