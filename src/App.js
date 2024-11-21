import GlobalStyle from './globalStyles';
import Content from './Content'
import PageProvider from "./PageProvider";


function App() {
  return (
      <>
        <PageProvider>
          <GlobalStyle />
          <Content />
        </PageProvider>
      </>
  );
}

export default App;
