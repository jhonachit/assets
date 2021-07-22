import "./cardHome.component.css"

export default function CardHomeComponent({title, desc, refList, refadd}) {
  return (
    <div class="card home-card m-3">
      <div class="card-body">
        <h5 class="card-title">{title} </h5>
        <p class="card-text">{desc}</p>
        <a href={refList} class="btn btn-primary btn-lg">
          {title}
        </a>
        <a href={refadd} class="btn btn-secondary btn-lg">
          Add
        </a>
      </div>
    </div>
  );
}
