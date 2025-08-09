const NowPlayingPage = () => {
  return (
  
<div className="flex">

  <div className="flex-1">

    <div className="p-8">
      <h1 className="text-4xl font-bold mb-2">En cines</h1>
      <p className="  ">Descubre las últimas películas que estrenan en cines</p>
    </div>

    <div className="px-8 pb-8">
      {/* <!-- Estado de carga --> */}
    
        <div className="flex justify-center flex-col items-center h-full py-12">
          {/* <!-- Spinner de carga usando DaisyUI --> */}
          <span className="loading loading-spinner loading-xl text-secondary"></span>
          <p className="mt-4">Cargando películas...</p>
        </div>

      {/* <!-- Grid de películas (solo se muestra si hay datos y no está cargando) --> */}
      {/* @if (!isLoading() && movies().length > 0) { */}
        {/* <!-- Grid responsive que se adapta a diferentes tamaños de pantalla --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {/* <!-- Itera sobre las películas usando @for -->
        @for (movie of movies(); track movie.id) {
          <!-- Cada tarjeta es clickeable y navega a la página de detalle -->
          <cinema-movie-card [movie]="movie" [routerLink]="['/cinema/movie', movie.id]"></cinema-movie-card>
        } */}
        </div>
      
      {/* <!-- Estado de error -->
      @if (hasError()) {
        <!-- Alert de error usando DaisyUI --> */}
        <div role="alert" className="alert alert-error alert-soft text-center justify-center flex-1">
          <span className="text-base">{}</span>
        </div>

    </div>
  </div>
</div>

  )
}

export default NowPlayingPage
