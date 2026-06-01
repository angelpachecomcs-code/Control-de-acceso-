import { useCallback } from 'react';
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import HardwareNode from './components/HardwareNode';
import { hardwareCatalog } from './data/hardwareCatalog';

const nodeTypes = { hardware: HardwareNode };

const initialNodes = [
  { id: 'node-1', type: 'hardware', position: { x: 50, y: 50 }, data: hardwareCatalog[0] },
];

function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
