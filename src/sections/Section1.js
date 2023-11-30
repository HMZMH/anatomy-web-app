import './Sections.css';
import vertebral_column from '../assets/vertebral_column.png';
import knee_anatomy from '../assets/knee_anatomy.jpg';

function Section1 () {
    
    return(
        <div className='section'>
            <h3>Skeletal System</h3>

            <ul>
                <li>Humans are vertebrates with a vertebral column.</li>
                <img className='section-images' src={vertebral_column} alt='vertebral column'/>
                <li>The human skeletal system includes bones, cartilage, ligaments, and tendons, accounting for about 20% of body weight.</li>
                <img className='section-images' src={knee_anatomy} alt='knee anatomy'/>
                <li>Bones are living tissues that use oxygen, release waste products, and can change shape in response to mechanical stress.</li>
                <li>The skeletal system provides a rigid framework called the skeleton, supporting and protecting soft organs.</li>
                <li>It supports the body against gravity, with the lower limb bones supporting the trunk in a standing position.</li>
                <li>The skeleton also protects soft body parts, such as the cranium protecting the brain and vertebrae protecting the spinal cord.</li>
                <li>Bones work with muscles as lever systems for body movement.</li>
                <li>Bones contain a significant amount of calcium, primarily in the form of calcium phosphate.</li>
                <li>Calcium is released from bones when blood calcium levels drop and stored when levels rise.</li>
                <li>Hematopoiesis, the formation of blood cells, mainly occurs in the red marrow of bones.</li>
                <li>In infants, red marrow is present in bone cavities, but it's replaced by yellow marrow for fat storage with age.</li>
                <li>In adults, red marrow remains in spongy bones in specific areas and plays a role in forming red and white blood cells and blood platelets.</li>
            </ul>
        </div>
    );
}

export default Section1;