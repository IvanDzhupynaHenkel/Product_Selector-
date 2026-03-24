import { RouterProvider } from 'react-router';
import { router } from './routes';
import { RecentItemsProvider } from './contexts/RecentItemsContext';

export default function App() {
  return (
    <RecentItemsProvider>
      <RouterProvider router={router} />
    </RecentItemsProvider>
  );
}