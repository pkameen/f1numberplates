// src/app/gallery/[id]/page.tsx
import React from 'react';

const PlateDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">Plate Detail Page</h1>
      <p className="text-xl mt-2">Details for plate with ID: {params.id}</p>
    </div>
  );
};

export default PlateDetailPage;
