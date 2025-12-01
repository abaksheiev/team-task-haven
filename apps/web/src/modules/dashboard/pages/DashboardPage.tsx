import { useTasksByStatus, updateTask } from "../hooks/useTasksByStatus";
import TaskCard from "../components/TaskCard";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import Popup from "../../../shared/components/Popup";
import TaskEditForm from "../../tasks/pages/TaskEditForm";
import type { Task } from "../../tasks/types";

const columns = [
  { key: "todo", title: "To Do" },
  { key: "in_progress", title: "In Progress" },
  { key: "in_review", title: "In Review" },
  { key: "done", title: "Done" },
];

export default function DashboardPage() {
  const { tasksByStatus, loading, error, refresh, updateTaskStatus } =
    useTasksByStatus();

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Task | null>(null);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  const onDragEnd = async (result: any) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    await updateTaskStatus(draggableId, destination.droppableId);

    refresh();
  };

  const handleEditClick = (item: Task) => {
    setSelectedItem(item);
    setPopupOpen(true);
  };

  const handleSave = async (updatedData: Task) => {
    console.log("Saved:", updatedData);
    await updateTask(updatedData.id, updatedData);
    setPopupOpen(false);
  };

  return (
    <>
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
                    minHeight: "200px",
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
                            ...provided.draggableProps.style,
                          }}
                        >
                          <TaskCard
                            task={task}
                            onEdit={() => handleEditClick(task)}
                          />
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
      {selectedItem && (
        <Popup
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          title="Edit Item"
        >
          <TaskEditForm
            initialData={selectedItem}
            onSave={handleSave}
            onCancel={() => setPopupOpen(false)}
          />
        </Popup>
      )}
    </>
  );
}
