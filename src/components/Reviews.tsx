export function Reviews() {
  const reviews = [
    {
      name: 'Анна Петрова',
      role: 'Владелец дома',
      rating: 5,
      text: 'Отличная работа! Построили дом точно в срок, качество на высшем уровне. Особенно порадовало внимательное отношение к деталям и профессионализм бригады.',
      avatar: 'АП',
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Директор компании',
      rating: 5,
      text: 'Делали ремонт офиса. Всё прошло гладко, без задержек. Подрядчики оказались очень ответственными. Рекомендую всем, кто ценит своё время!',
      avatar: 'ДС',
    },
    {
      name: 'Елена Иванова',
      role: 'Владелец квартиры',
      rating: 5,
      text: 'Сделали капремонт квартиры под ключ. Результат превзошёл ожидания! Спасибо за терпение, профессионализм и качественную работу. Обязательно обращусь снова.',
      avatar: 'ЕИ',
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <span style={{ color: 'var(--color-primary-dark)' }}>Отзывы</span>
          </div>
          
          <h2 style={{ color: 'var(--color-text-dark)' }} className="mb-4">
            Что говорят наши клиенты
          </h2>
          
          <p style={{ color: 'var(--color-text-gray)' }} className="max-w-2xl mx-auto">
            Мы гордимся доверием наших клиентов и стремимся превосходить их ожидания
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border-2 relative"
              style={{ 
                borderColor: 'var(--color-secondary)',
                backgroundColor: 'var(--color-bg-light)'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="var(--color-primary)"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p style={{ color: 'var(--color-text-gray)' }} className="mb-6">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <span className="text-white">{review.avatar}</span>
                </div>
                
                <div>
                  <div style={{ color: 'var(--color-text-dark)' }}>
                    {review.name}
                  </div>
                  <div style={{ color: 'var(--color-text-gray)' }}>
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 p-8 rounded-2xl" style={{ backgroundColor: 'var(--color-secondary)' }}>
          <div className="text-center">
            <div style={{ color: 'var(--color-primary-dark)' }}>500+</div>
            <p style={{ color: 'var(--color-text-gray)' }}>Завершённых проектов</p>
          </div>
          
          <div className="text-center">
            <div style={{ color: 'var(--color-primary-dark)' }}>98%</div>
            <p style={{ color: 'var(--color-text-gray)' }}>Довольных клиентов</p>
          </div>
          
          <div className="text-center">
            <div style={{ color: 'var(--color-primary-dark)' }}>15+</div>
            <p style={{ color: 'var(--color-text-gray)' }}>Лет на рынке</p>
          </div>
          
          <div className="text-center">
            <div style={{ color: 'var(--color-primary-dark)' }}>50+</div>
            <p style={{ color: 'var(--color-text-gray)' }}>Сертифицированных специалистов</p>
          </div>
        </div>
      </div>
    </section>
  );
}
