import ProjectDetails from "@/v2Components/UI/ProjectDetails";


const ProjectDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  console.log(id);

  const response = await fetch(
    `https://sarwarserver.vercel.app/api/v2/projects/${id}`
  );
  const { data } = await response.json();
  
  return (
   <div className=" min-h-screen">


    <ProjectDetails data={data}/>
   </div>
  );
};

export default ProjectDetailsPage;
