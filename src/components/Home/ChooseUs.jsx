import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';

export default function ChooseUs() {

    const direction = document.documentElement.getAttribute('dir') || 'ltr';
    const marginClass = direction === 'rtl' ? 'ml-2' : 'mr-2';

    const { t } = useTranslation();

  return (
    <section className="bg-white py-16">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-bold text-black mb-12">{t('why_choose_us')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex items-start">
                <FaCheckCircle className={` ${marginClass} text-yellow-500 text-3xl mr-4 flex-shrink-0`} />
                <div>
                    <h4 className="text-xl font-semibold text-black">{t('expert_team')}</h4>
                    <p className="text-black mt-2">
                        {t('expert_team_desc')}
                    </p>
                </div>
            </div>
            <div className="flex items-start">
                <FaCheckCircle className={` ${marginClass} text-yellow-500 text-3xl mr-4 flex-shrink-0`} />
                <div>
                    <h4 className="text-xl font-semibold text-black">{t('innovative_solutions')}</h4>
                    <p className="text-black mt-2">
                        {t('innovative_solutions_desc')}
                    </p>
                </div>
            </div>
            <div className="flex items-start">
                <FaCheckCircle className={` ${marginClass} text-yellow-500 text-3xl mr-4 flex-shrink-0`} />
                <div>
                    <h4 className="text-xl font-semibold text-black">{t('client_satisfaction')}</h4>
                    <p className="text-black mt-2">
                        {t('client_satisfaction_desc')}
                    </p>
                </div>
            </div>
            <div className="flex items-start">
                <FaCheckCircle className={` ${marginClass} text-yellow-500 text-3xl mr-4 flex-shrink-0`} />
                <div>
                    <h4 className="text-xl font-semibold text-black">{t('global_reach')}</h4>
                    <p className="text-black mt-2">
                        {t('global_reach_desc')}
                    </p>
                </div>
            </div>
            <div className="flex items-start">
                <FaCheckCircle className={` ${marginClass} text-yellow-500 text-3xl mr-4 flex-shrink-0`} />
                <div>
                    <h4 className="text-xl font-semibold text-black">{t('support')}</h4>
                    <p className="text-black mt-2">
                        {t('support_desc')}
                    </p>
                </div>
            </div>
            <div className="flex items-start">
                <FaCheckCircle className={` ${marginClass} text-yellow-500 text-3xl mr-4 flex-shrink-0`} />
                <div>
                    <h4 className="text-xl font-semibold text-black">{t('competitive_pricing')}</h4>
                    <p className="text-black mt-2">
                        {t('competitive_pricing_desc')}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
