import React from 'react'
import Card from './Card'


const Features = () => {
   
   return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
      <Card
        title="Theme Changes"
        desc="Write your way, your mood"
      >
        {/* custom content */}
        <div className="grid grid-cols-4 gap-4">
          <span className="size-8 rounded-full bg-red-600"></span>
          <span className="size-8 rounded-full bg-black"></span>
          <span className="size-8 rounded-full bg-purple-600"></span>
          <span className="size-8 rounded-full bg-green-600"></span>
        </div>
      </Card>

      <Card
        title="Notebooks"
        desc="Everything in the right place"
      >
        <div className="flex gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Work
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-md">
            Personal
          </button>
        </div>
      </Card>

      <Card
        title="Share notes"
        desc="Share ideas in one click"
      >
        <button className="bg-primary text-white px-6 py-2 rounded-md">
          🔗 Share
        </button>
      </Card>

    </div>
  );
}

export default Features