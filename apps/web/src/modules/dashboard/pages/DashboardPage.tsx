import { useTasksByStatus } from "../hooks/useTasksByStatus";
import TaskCard from "../components/TaskCard";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const columns = [
  { key: "Todo", title: "To Do" },
  { key: "In Progress", title: "In Progress" },
  { key: "In Review", title: "In Review" },
  { key: "Done", title: "Done" }
];

export default function DashboardPage() {
  const { tasksByStatus, loading, error, refresh, updateTaskStatus } = useTasksByStatus();

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  const onDragEnd = async (result:any) => {
    const { source, destination, draggableId } = result;
    
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
   console.log("DashboardPage:updateTaskStatus")
    await updateTaskStatus(draggableId, destination.droppableId);

    refresh();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: "16px" }}>
        {columns.map((col) => (
          <Droppable key={col.key} droppableId={col.key}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  flex: 1,
                  backgroundColor: "#f4f4f4",
                  padding: "8px",
                  borderRadius: "4px",
                  minHeight: "200px"
                }}
              >
                <h3>{col.title}</h3>
                {tasksByStatus[col.key]?.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          width: "100%", 
                          marginBottom: "8px",
                          boxSizing: "border-box",
                          ...provided.draggableProps.style
                        }}
                      >
                        <TaskCard task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}