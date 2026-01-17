interface ItemsTableProps {
    title: string
  }

function ItemsTable({ title } : ItemsTableProps){
    return(
        <div className="group flex items-center justify-between bg-zinc-700/30 px-4 py-2 rounded-lg border border-transparent hover:border-zinc-600 hover:bg-zinc-700/50 transition-all">
            <span className="text-zinc-200 font-medium">{title}</span>
            
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
        </div>
    )
}

export default ItemsTable