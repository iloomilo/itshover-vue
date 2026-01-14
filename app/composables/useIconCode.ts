export const useIconCode = () => {
    const iconModules = import.meta.glob('../../registry/icons/*.vue', {
        query: '?raw',
        import: 'default',
        eager: false
    })

    const code = ref('')
    const loading = ref(false)

    const toPascalCase = (str: string) => {
        return str.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    }

    const loadIcon = async (slug: string) => {
        if (!slug) return

        loading.value = true
        const moduleKey = Object.keys(iconModules).find(path => path.endsWith(`/${slug}.vue`))
        if (moduleKey && iconModules[moduleKey]) {
            try {
                code.value = await iconModules[moduleKey]() as string
            } catch (e) {
                console.error(e)
                code.value = 'Error while loading the code. Please create an issue on GitHub.'
            }
        } else {
            code.value = 'Icon not found.'
        }
        loading.value = false
    }

    return {
        code,
        loading,
        loadIcon,
        toPascalCase
    }
}