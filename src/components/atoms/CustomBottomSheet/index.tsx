import { ReactNode, forwardRef, useCallback, useMemo } from 'react'

import { BottomSheetBackdropProps, BottomSheetModal } from '@gorhom/bottom-sheet'

import CustomBottomSheetBackdrop from '../CustomBottomSheetBackdrop'

const CustomBottomSheet = forwardRef<
  BottomSheetModal,
  { children: ReactNode; points?: (string | number)[] }
>(({ children, points = ['65%'] }, ref) => {
  const snapPoints = useMemo(() => points, [points])

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => <CustomBottomSheetBackdrop {...props} ref={ref} />,
    [ref]
  )

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      enableOverDrag
      enablePanDownToClose
      enableDismissOnClose
      handleComponent={() => null}
      style={{
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }}
      backdropComponent={renderBackdrop}>
      {children}
    </BottomSheetModal>
  )
})

export { BottomSheetModal as BottomSheetModalTypes, CustomBottomSheet }
