import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    //load data...
    // Navigate to page
    // router.push('/clients/igor/projecta');
    router.push({
      pathname: '/clients/[id]/[clientprojectId]',
      query: { id: 'igor', clientProjectId: 'projecta' },
    });
  }

  return (
    <div>
      <h1>The ClientProjects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
