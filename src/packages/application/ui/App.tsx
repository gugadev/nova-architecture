import { QueryClient, QueryClientProvider } from "react-query";

import { HomePresenter } from "packages/home/presentation/HomePresenter";
import logo from "packages/application/assets/images/logo.svg";
import "packages/application/ui/App.css";

export function App(): JSX.Element {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div style={{ marginTop: 80 }} />
                <main>
                    <HomePresenter />
                </main>
            </div>
        </QueryClientProvider>
    );
}

export default App;
