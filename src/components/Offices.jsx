import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Indie Hacker House 第一站" invert={invert}>
        雪庐艺术公寓 
          <br />
          云南省大理白族自治州大理市大理欣怡缶庐客栈西南100米(小邑庄线公路南)
        </Office>
      </li>
      <li>
        {/* <Office name="Billund" invert={invert}>
          24 Lego Allé
          <br />
          7190, Billund, Denmark
        </Office> */}
      </li>
    </ul>
  )
}
