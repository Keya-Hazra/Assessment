import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import './styles/global.css'
import './styles/tailwind.css'

function App() {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
    <div
      className="min-h-screen selection:bg-primaryLight/10 selection:text-primaryDark prose-p:font-medium prose-p:text-xl text-white/50 prose-h2:leading-[3rem] prose-headings:text-white prose-h2:font-[Roboto] prose-h2:font-bold prose-h2:text-4xl prose-p:leading-relaxed"
      style={{
        background: 'linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)',
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  )
}

export default App
