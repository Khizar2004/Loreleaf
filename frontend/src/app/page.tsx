import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-4xl text-center py-12">
        <h1 className="text-5xl font-bold text-emerald-700 mb-6">
          Welcome to Loreleaf
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          A personal knowledge management system inspired by Zettelkasten, Roam Research, and digital gardens.
          Connect your thoughts, build a knowledge graph, and watch your ideas grow.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            href="/register" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition"
          >
            Get Started
          </Link>
          <Link 
            href="/login" 
            className="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-6 rounded-md shadow-md transition"
          >
            Sign In
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-emerald-600 text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold mb-3">Atomic Notes</h3>
          <p className="text-gray-600">
            Create small, focused notes called leaves. Each leaf contains a single idea, making your knowledge system flexible and interconnected.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-emerald-600 text-4xl mb-4">🔗</div>
          <h3 className="text-xl font-semibold mb-3">Knowledge Graph</h3>
          <p className="text-gray-600">
            Connect your thoughts with bidirectional links. The system automatically creates backlinks, helping you see relationships between ideas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-emerald-600 text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-3">Discover Insights</h3>
          <p className="text-gray-600">
            Search, filter, and analyze your personal knowledge base. Find patterns and connections you never knew existed.
          </p>
        </div>
      </div>
    </div>
  );
}
