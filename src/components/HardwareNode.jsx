import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const portColor = (type) => {
  switch (type) {
    case 'power':  return '#ef4444';
    case 'reader': return '#3b82f6';
    case 'input':  return '#f97316';
    case 'output': return '#22c55e';
    default:       return '#6b7280';
  }
};

const HardwareNode = ({ data }) => (
  <div className="relative" style={{ width: data.width, height: data.height }}>
    <img
      src={data.imageUrl}
      alt={data.name}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
    {data.ports.map((port) => (
      <Handle
        key={port.id}
        id={port.id}
        type="source"
        position={Position.Left}
        style={{
          top: port.top,
          left: port.left,
          background: portColor(port.type),
        }}
      />
    ))}
  </div>
);

export default memo(HardwareNode);
