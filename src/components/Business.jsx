import { features } from '../constant/index';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = () => (
  <div>

  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' /> we´ll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nesciunt enim voluptates, ducimus rem iusto minus cumque vel deleniti. Ex quo dolore fugit beatae rem odit maxime officiis atque illum?</p>
        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business