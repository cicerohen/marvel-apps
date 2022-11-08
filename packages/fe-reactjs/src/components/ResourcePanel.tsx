export const ResourcePanel = () => {
  return (
    <aside className="fixed left-0 bottom-0 bg-slate-800 w-full h-[60vh] text-white z-10">
      <div className="px-4 py-8">
        <header>
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            className="border-4 mx-auto border-gray-200 rounded-full h-20 w-20 mb-4"
          />
          <h2 className="text-lg mb-2 text-center font-semibold">3D-MAN</h2>
          <p className="text-center text-sm">
            Rick Jones has been Hulk's best bud since day one, but now he's more
            than a friend...he's a teammate! Transformed by a Gamma energy
            explosion, A-Bomb's thick, armored skin is just as strong and
            powerful as it is blue. And when he curls into action, he uses it
            like a giant bowling ball of destruction!
          </p>
        </header>
      </div>
    </aside>
  );
};
