"use client";
import { format } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { es } from "date-fns/locale/es";
import { usePathname } from "next/navigation";
import { WorkListType } from "../../../declaration";

interface TrayectoryType {
  title: string;
  items: WorkListType;
  icon: JSX.Element;
}

export default function Trayectory({ title, items, icon }: TrayectoryType) {
  const pathname = usePathname();
  const formatDate = (date: string) => {
    if (date === "Actualmente")
      return pathname.substring(1) === "en" ? "Currently" : date;
    return format(new Date(date), "MMM',' yyyy", {
      locale: pathname.substring(1) === "en" ? enUS : es,
    });
  };
  return (
    <section className="flex flex-col gap-10 py-8 mx-auto max-w-[700px] xl:max-w-[900px] xxl:max-w-[1100px]">
      <h2 className="text-secondary font-bold text-[30px]">{title}</h2>
      <ol className="relative border-s border-primary-200 ms-3.5 mb-4 md:mb-5 ">
        {items.data.map((item) => (
          <li key={item.id} className="mb-10 ms-8">
            <span className="absolute  flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-1 bg-secondary ring-secondary">
              {icon}
            </span>
            <article className="grid md:grid-cols-5 gap-4 md:gap-10">
              <div
                className={`${
                  item.description === null ? "md:col-span-5" : "md:col-span-2"
                } text-primary-200`}
              >
                <h3 className="text-secondary text-[20px] font-semibold">
                  {item.title}
                </h3>
                <h4>
                  {item.company}{" "}
                  {item.tyOfOcupation !== null
                    ? " · " + item.tyOfOcupation
                    : ""}
                </h4>
                <time className="text-[14px] text-primary-200/70">{`${formatDate(
                  item.date.since
                )} - ${formatDate(item.date.until)}`}</time>
                <div className="text-primary-200/70 text-pretty">
                  <small>{item.location}</small> {", "}
                  {item.mode !== null && (
                    <small className="text-secondary/80">
                      {pathname.substring(1) === "en"
                        ? item.mode.en
                        : item.mode.es}
                    </small>
                  )}
                </div>
              </div>
              {item.description !== null && (
                <div className="md:col-span-3 text-primary-200/70 text-pretty">
                  {pathname.substring(1) === "en"
                    ? item.description.en
                    : item.description.es}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
