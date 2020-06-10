import { Resizable, ResizableBox } 	from 'react-resizable';
import '../../../styles/resizable.css';

<ResizableBox width={200} height={100} className="box" axis="x" minConstraints={[100, 100]} maxConstraints={[2000, 300]} resizeHandles={['e','w']}>
	<span className="text">Only resizable by "x" axis.</span>
</ResizableBox>
