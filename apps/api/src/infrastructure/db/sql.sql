-- public."comments" definition

-- Drop table

-- DROP TABLE public."comments";

CREATE TABLE public."comments" (
	id uuid NOT NULL,
	"text" varchar NOT NULL,
	datecreated date NOT NULL,
	authorid uuid NULL,
	taskid uuid NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY (id)
);


-- public."comments" foreign keys

ALTER TABLE public."comments" ADD CONSTRAINT comments_tasks_fk FOREIGN KEY (taskid) REFERENCES public.tasks(id);
ALTER TABLE public."comments" ADD CONSTRAINT comments_users_fk FOREIGN KEY (authorid) REFERENCES public.users(id) ON UPDATE SET NULL;