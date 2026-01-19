export interface AddBookModalProps {
    isOpen: boolean
    onClose: () => void
    onSave: (data: {
        name: string
        description: string
        category: string
    }) => void
}