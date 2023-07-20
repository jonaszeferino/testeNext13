import React from "react";

export default function Home() {
  return (
    <>
    todo mundo pode ver
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">Título da Série</h2>
              <div className="aspect-none w-full overflow-hidden rounded-md bg-gray-200 lg:h-80 hover:shadow-md custom-shadow">
                <div className="flex justify-center items-center bg-white w-full h-full">
                  <img src="https://image.tmdb.org/t/p/original/guyS28A4IxwoMXIq3Xj9AszMefP.jpg" alt="Front of men's Basic Tee in black." className="object-contain" width="240" height="360" />
                </div>
              </div>
  
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
