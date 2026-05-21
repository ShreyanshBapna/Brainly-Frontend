import { useState } from 'react'
import '../App.css'
import { Button } from '../component/Button'
import { Card } from '../component/Card'
import { CreateContentModel } from '../component/CreateComponentModel'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../component/Sidebar'
import { useContent } from '../hooks/useContent'

export const Dashboard = () => {
    const [modelOpen, setModelOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const contents = useContent();

    // Filter content based on selected type
    const filteredContents = selectedFilter === 'all' 
        ? contents 
        : contents?.filter(content => content.type === selectedFilter) || [];

    const handleFilterChange = (filterType: string) => {
        setSelectedFilter(filterType);
    };

  return (
    <div>
      <div>
        <Sidebar selectedFilter={selectedFilter} onFilterChange={handleFilterChange}/>
      </div>
     
      <div className='p-1 ml-65 min-h-screen bg-gray-100 pl-4'>
        <CreateContentModel open={modelOpen} onClose={() => {
          setModelOpen(false);
        }}></CreateContentModel>
        <div className='flex justify-between p-2'>
          <div className='font-bold text-gray-700 text-2xl'>
          All Notes
        </div>
        <div className='flex justify-end'>
            <Button variant="primary"  text='Add Content' size='md' startIcon={<PlusIcon/>} onClick={() => {
              setModelOpen(true);
            }}></Button>
            <Button variant="secondary" text='Share Brain' size='md' startIcon={<ShareIcon/>}></Button>
        </div>
        </div>
        
        <div className='flex gap-2 flex-wrap'>
          {filteredContents.map(({title, type, link, _id}) => <Card key={_id} contentId={_id} title={title} type={type} link={link}> </Card>
        )}
         
        </div>
      </div>
    </div>
    
  )
} 