import React from 'react'

// types
import { Receipt } from 'types'
import { TokenDetails } from '@diadata.org/dex-js-1'

// PoolingWidget: subcomponents
import TokenSelector from 'components/PoolingWidget/TokenSelector'
import { TokenSelectorProps } from 'components/PoolingWidget/TokenSelector'
import { CreateStrategy } from 'components/PoolingWidget/CreateStrategy'

export interface SubComponentProps extends TokenSelectorProps {
  isSubmitting: boolean
  step: number
  selectedTokensMap: Map<number, TokenDetails>
  spread: number
  setSpread: React.Dispatch<React.SetStateAction<number>>
  txHash: string
  txReceipt?: Receipt
  txError?: Error
  nextStep: () => void
}

const SubComponents: React.FC<SubComponentProps> = ({
  step,
  handleTokenSelect,
  selectedTokensMap,
  tokens,
  spread,
  setSpread,
  txHash,
  txReceipt,
  txError,
  isSubmitting,
}) => {
  switch (step) {
    case 1:
      return (
        <TokenSelector handleTokenSelect={handleTokenSelect} tokens={tokens} selectedTokensMap={selectedTokensMap} />
      )
    case 2:
      return (
        <CreateStrategy
          spread={spread}
          setSpread={setSpread}
          selectedTokensMap={selectedTokensMap}
          txIdentifier={txHash}
          txReceipt={txReceipt}
          txError={txError}
          isSubmitting={isSubmitting}
        />
      )
    default:
      return (
        <TokenSelector handleTokenSelect={handleTokenSelect} tokens={tokens} selectedTokensMap={selectedTokensMap} />
      )
  }
}

export default SubComponents
